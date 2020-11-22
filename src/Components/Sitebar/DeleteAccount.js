import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }

function DeleteAccount(props){
    const { open, 
        token, 
        logoutUser, 
        handleClose,
        setSnackBarMsg,
        setSnackBarSeverity,
        setShowSnackBar
    } = props
    console.log(token) 
        const deleteAccount = () =>{
            fetch(`http://localhost:4000/user/delete`, {
                method: 'DELETE',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': token
                })
            })
            .then (res => {
                if(res.status === 200){
                    logoutUser();
                    handleClose();
                    setSnackBarMsg('Profile and User account deleted successfully!');
                    setSnackBarSeverity('success');
                }
                else{
                    handleClose();
                    setSnackBarMsg('Could not delete the Profile and User account. Please try again later.');
                    setSnackBarSeverity('error');
                }
                setShowSnackBar(true);
            })
            .catch (err => console.log(err));
            
            
        }
        
        const deleteProfile = () =>{
                fetch(`http://localhost:4000/profile/`,{
                    method: 'DELETE',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': token
                    })
                })
                .then (()=> deleteAccount())
                .catch  (err => console.log(err))
        }   

      
        return (
          <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title"
                    >
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                        Deleting Account
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete your account and your profile? This action cannot be reverted.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            No, do not Delete
                        </Button>
                        <Button onClick={deleteProfile} color="primary">
                            Yes, delete my account
                        </Button>
                </DialogActions>
                </Dialog>
          </div>

        );
      }


export default DeleteAccount;