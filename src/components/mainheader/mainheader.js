import { useSelector, useDispatch } from 'react-redux'
import { useRef, useState } from 'react'
import { userProfile } from '../../slices/profile'
import { getProfile, setProfile } from '../../services/user.service'

/**
         * MainHeader component
         * 
         * 
         * @return MainHeader component
         *    
         */
function MainHeader() {
  const dispatch = useDispatch()

  const name = useSelector((state)=>state.profile.firstName)
  const lastname = useSelector((state)=>state.profile.lastName)

  const usernameInput = useRef()
  const userLastNameInput = useRef()

  const [editingProfile, setEditingProfile] = useState(false)

  function editProfile() {
    setEditingProfile (true)

  }

  function cancelEditProfile() {
    setEditingProfile (false)
  }

  async function saveEditProfile(e) {
    e.preventDefault()
    const username=usernameInput.current.value||name
    const userLastName = userLastNameInput.current.value||lastname
    const responseSetProfile = await setProfile(username, userLastName)
    if (responseSetProfile.status===200){
      const responseProfile = await getProfile()
      dispatch(userProfile(responseProfile.data.body))
      setEditingProfile (false)
  }

  }
  
    return (
      <>
      {!editingProfile? 
        <div className="header">
        <h1>Welcome back <br />
        {name} {lastname} !</h1>
        <button className="formButton" onClick={editProfile}>Edit Name</button>
        </div>
      
      :
      <div className="header">
      <h1>Welcome back </h1>
      <form className="form">
        <div className="formWrappers">
          <div className="formWrapper">
            <input id='username' type='text' placeholder={name} ref={usernameInput} />
          </div>
          <div className="formWrapper">
            <input id='userLastName' type='text' placeholder={lastname} ref={userLastNameInput} />
          </div>
        </div>
        <div className="formButtons">
          <button className="MainHeader.formButton" onClick={saveEditProfile}>Save</button>
          <button className="MainHeader.formButton" onClick={cancelEditProfile}>Cancel</button>
        </div>
      </form>
      
      </div>
    }
     </>
    )
  }


export default MainHeader