import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useState} from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateNewTaskForm({ handleClose, open }) {

  const [formData, setFormData]=useState({
    title:"",
    image:"",
    description:"",
    tags:[],
    deadline:new Date(),
  })

  const [selectedTags, setSelectedTags] = useState([]);

  const handleChange =(e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleTagsChange=(event, value)=>{
      setSelectedTags(value);

  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <TextField
                label="Title"
                fullWidth
                name='title'
                value={FormData.title}
                onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                label="Image"
                fullWidth
                name='image'
                value={FormData.image}
                onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                label="Description"
                fullWidth
                multiline
                rows={4}
                name='description'
                value={FormData.description}
                onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                label=""
                fullWidth
                name=''
                value={FormData.title}
                onChange={handleChange}
                />
              </Grid>
            </Grid>
          </form>
    

        </Box>
      </Modal>
    </div>
  );
}
