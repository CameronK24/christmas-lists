import React, {useState, useEffect} from "react";
import './create.css';
import {ReactComponent as EditIcon} from '../../icons/edit_modify_icon_196940.svg';
import {ReactComponent as MinusIcon} from '../../icons/minus-gross-horizontal-straight-line-symbol_icon-icons.com_74137.svg';

const Create = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [listArr, setListArr] = useState([]);
  const [mappedList, setMappedList] = useState([]);
  const [itemInput, setItemInput] = useState("");

  useEffect(() => {
    setMappedList(listArr.map((item, index) => (
      <li key={index}>
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
    setItemInput("");
  }

  return (
    <section className="create-wrapper">
      <section className="button-wrapper">
        <button className="new-list" onClick={() => setIsCreating(!isCreating)}>
          {isCreating ? <MinusIcon className="minus-icon" /> : <p>+</p>}
        </button>
        <button className="edit-list"><EditIcon className="edit-icon"/></button>
      </section>
      {isCreating
      ?
        <section className="creating-list">
          <section className="create-header-wrapper">
            <h2>New Christmas List</h2>
            <button className="save-list-button" >Save</button>
          </section>
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