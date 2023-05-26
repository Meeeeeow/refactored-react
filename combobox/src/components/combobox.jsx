import React, { useState } from 'react';

const ComboBox = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [argumentsList, setArgumentsList] = useState([]);
  const [newArgument, setNewArgument] = useState('');
  const [constantValue, setConstantValue] = useState(null);
  const [selectedArgumentValues, setSelectedArgumentValues] = useState({});
  const [logicalOperation, setLogicalOperation] = useState(null);

  const handleOptionChange = (e) => {
    const { value } = e.target;
    setSelectedOption(value);
  };

  const handleConstantValueChange = (e) => {
    const value = e.target.value === 'true';
    setConstantValue(value);
  };

  const handleArgumentChange = (argName, value) => {
    setSelectedArgumentValues((prevValues) => ({
      ...prevValues,
      [argName]: value === 'true',
    }));
  };

  const handleLogicalOperationChange = (e) => {
    const { value } = e.target;
    setLogicalOperation(value);
  };

  const handleAddArgument = () => {
    if (newArgument.trim() !== '') {
      setArgumentsList([...argumentsList, newArgument]);
      setNewArgument('');
    }
  };

  const handleNewArgumentChange = (e) => {
    setNewArgument(e.target.value);
  };

  const handleDeleteArgument = (argument) => {
    setArgumentsList((prevArguments) => prevArguments.filter((arg) => arg !== argument));
    setSelectedArgumentValues((prevValues) => {
      const updatedValues = { ...prevValues };
      delete updatedValues[argument];
      return updatedValues;
    });
  };

  const performLogicalOperation = () => {
    if (logicalOperation === 'and') {
      const argumentValues = Object.values(selectedArgumentValues);
      return argumentValues.length >= 2 ? argumentValues.reduce((result, value) => result && value) : undefined;
    }

    if (logicalOperation === 'or') {
      const argumentValues = Object.values(selectedArgumentValues);
      return argumentValues.length >= 2 ? argumentValues.reduce((result, value) => result || value) : undefined;
    }

    return undefined;
  };

  const renderLogicalOperationOutput = () => {
    const operationResult = performLogicalOperation();
    if (operationResult !== undefined || constantValue !== null) {
      return (
          selectedOption === 'constant' ?(
            <div>
              <h4>Result:</h4>
              <p>{String(constantValue)}</p>
            </div>
          ) : (
            <div>
              <h4>Logical Operation Result:</h4>
              <p>{String(operationResult)}</p>
            </div>
          )
        
      );
    }
    return null;
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="logical">Logical Operation</option>
        <option value="constant">Constant</option>
        <option value="arguments">Arguments</option>
      </select>

      {selectedOption === 'constant' && (
        <div>
          <label>
            Constant Value:
            <select value={constantValue !== null ? constantValue.toString() : ''} onChange={handleConstantValueChange}>
              <option value="">Select a value</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </label>

        </div>
      )}

      {(selectedOption === 'arguments' && Object.keys(selectedArgumentValues).length >= 0) && (
        <div>
          {argumentsList.map((argument, index) => (
            <div key={index}>
              <label>
                {argument} Value:
                <select
                  value={selectedArgumentValues[argument] !== undefined ? selectedArgumentValues[argument].toString() : ''}
                  onChange={(e) => handleArgumentChange(argument, e.target.value)}
                >
                  <option value="">Select a value</option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </label>
              <button onClick={() => handleDeleteArgument(argument)}>X</button>
            </div>
          ))}

          <input type="text" value={newArgument} onChange={handleNewArgumentChange} placeholder="New Argument Name" />
          <button onClick={handleAddArgument}>Add Argument</button>
        </div>
      )}

      {selectedOption === 'logical' && (
        <div>
          <label>
            Logical Operation Result:
            <select value={logicalOperation || ''} onChange={handleLogicalOperationChange}>
              <option value="">Select an operation</option>
              <option value="and">AND</option>
              <option value="or">OR</option>
            </select>
          </label>
        </div>
      )}

      {/* {selectedOption === 'or' && (
        <div>
          <label>
            Logical Operation Result:
            <select value={logicalOperation || ''} onChange={handleLogicalOperationChange}>
              <option value="">Select an operation</option>
              <option value="and">AND</option>
              <option value="or">OR</option>
            </select>
          </label>
        </div>
      )} */}

      <div>
        {renderLogicalOperationOutput()}
      </div>
    </div>
  );
};

export default ComboBox;
