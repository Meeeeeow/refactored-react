import React from 'react'
import CustomButton from './customButton';
import { firestore } from '../firebase/firebase.utils';
import { collection,  addDoc, query,  getDocs } from 'firebase/firestore';
import { getStorage, ref , deleteObject as deleteStorageObject, uploadBytesResumable,getDownloadURL } from 'firebase/storage';
const FileUploader = ({currentUser}) => {
  const [files, setFiles] = React.useState([]);  
  const storage = getStorage();
  console.log(currentUser); 
  
  // Fetch the user's files from Firestore
  React.useEffect(()=>{
    if(currentUser)
    {
        const filesRef = collection(firestore, currentUser.id);
        const q = query(filesRef);
        getDocs(q).then((querySnapshot)=>{
            const files = querySnapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
            setFiles(files);
        }).catch(err=>console.log(err));
    }
  },[currentUser]);
  
  // Upload a file to Firestore and Firebase Storage
  const handleUpload = async(e)=>{
    const file = e.target.files[0];
    console.log(file);
    const storageRef = ref(storage,`${currentUser.id}/files/${file.name}`);
    console.log(storageRef); //gives path location and service 
    const uploadTask = uploadBytesResumable(storageRef,file);
    console.log(uploadTask); //uploading

    // Wait for the upload to complete and get the download URL
    const snapShot = await uploadTask;
    const downloadURL = await getDownloadURL(snapShot.ref);
    console.log(downloadURL); 

    // Create a document in the 'files' collection
    const fileRef = collection(firestore,'files');
    console.log(fileRef);
    const docRef = await addDoc(fileRef,{
        name: file.name,
        url: downloadURL,
        userID: currentUser.id,
    });
    console.log(docRef);
    console.log(docRef.id);
    
    // Add the file to the user's collection
    const userFileRef = collection(firestore,currentUser.id);
    await addDoc(userFileRef,{
        name: file.name,
        fileID: docRef.id,
    });

    setFiles([...files, {id: docRef.id, name: file.name, url: downloadURL}]);
  }

  const handleFileDelete = async(fileID,fileName)=>{
    console.log(fileID)
    // Find the file in the 'files' collection
    try{
       // Delete the file document from Firestore
        await firestore.collection(`${currentUser.id}`).doc(fileID).delete();

        // Delete the file from Firebase Storage
        const storageRef = ref(storage, `${currentUser.id}/files/${fileName}`);
        await deleteStorageObject(storageRef);

        // Remove the file from the local state
        setFiles(files.filter((file) => file.id !== fileID));

        console.log(`File ${fileID} deleted successfully.`);

    }catch(error)
    {
        console.log(error);
    }
  }
  return (
    <div>
        <input type="file"onChange={handleUpload}/>
        <ul>
            {
                files.map((file)=>(
                    <li key={file.id}>
                        <a href={file.url} target='_blank' rel='noopener noreferrer'>
                            {file.name}
                        </a>
                        <CustomButton type="button" onClick={()=>handleFileDelete(file.id, file.name)}>
                            Delete
                        </CustomButton>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default FileUploader;