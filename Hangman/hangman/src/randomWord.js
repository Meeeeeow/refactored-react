let Programming_Language = [
    "java",
    "c",
    "cplusplus",
    "ruby",
    "perl",
    "python",
    "r",
    "javascript",
    "css",
    "html",
    "php",
    "sql",
    "mysql",
    "cobol",
    "scala",
    "xml",
    "kotlin",
    "matlab",
    "pascal",
    "typescript",
    "visual basic",
    "groovy",
    "assembly",
  ];

  const RandomWord = () =>{
     return Programming_Language[Math.floor(Math.random() * Programming_Language.length)];
  }

  export default RandomWord;