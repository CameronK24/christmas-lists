import React, {useState, useEffect} from "react";
import './create.css';

const Create = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [listArr, setListArr] = useState([]);
  const [mappedList, setMappedList] = useState([]);
  const [itemInput, setItemInput] = useState("");

  useEffect(() => {
    setMappedList(listArr.map((item, index) => (
      <li>
        <h3>{item}</h3>
        <button onClick={() => deleteItem(index)}>X</button>
      </li>
    )))
  }, [listArr]);

  const deleteItem = (item) => {
    let list = listArr;
    list.splice(item, 1);
    setListArr([...list]);
  }

  const updateList = (item) => {
    setListArr([...listArr, item]);
  }

  return (
    <section className="create-wrapper">
      <section className="button-wrapper">
        <button className="new-list" onClick={() => setIsCreating(true)}>+</button>
        <button className="edit-list">E</button>
      </section>
      {isCreating
      ?
        <section className="creating-list">
          <h2>New Christmas List</h2>
          <section className="add-item-wrapper">
            <input type="text" className="item-input" value={itemInput} onChange={e => setItemInput(e.target.value)}/>
            <button className="add-item-button" onClick={() => updateList(itemInput)}>Add</button>
          </section>
          <section className="item-list-wrapper" >
            <ul className="item-list">
              {mappedList}
            </ul>
          </section>
        </section>
      :null}
    </section>
  )
}

export default Create;