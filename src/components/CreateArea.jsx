import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: ''
  })
  const [open, setOpen] = useState(false)

  function handleChange(event){
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]:value
      };
    });
  }
  function submitNote(event){
    props.onAdd(note);
    setNote({
      title: '',
      content: ''
    })
    event.preventDefault()
  }

  function onMotion(){
    setOpen(true)
  }
  return(
    <div>
      <form className="create-note">
        {open&&
        <input name="title" onChange={handleChange} 
        placeholder="Title" value={note.title}/>}
        <textarea onClick={onMotion} name="content" onChange={handleChange} value={note.content}  
        placeholder="Take a note..." rows={open ? "3" : '1'}/>
        {open && <Zoom in={true}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;