const UserProfilePanel = props => (
<div className='profile-container'>
  <div className='profile-pircture'>
    <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80"><title>User icon</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="72" fill="#FFFFFF"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#ddd"></rect><rect x="0" y="0" width="36" height="36" transform="translate(0 8) rotate(324 18 18) scale(1)" fill="#0d6efd" rx="36"></rect><g transform="translate(-4 4) rotate(4 18 18)"><path d="M13,19 a1,0.75 0 0,0 10,0" fill="#FFFFFF"></path><rect x="10" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect><rect x="24" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect></g></g></svg>
  </div>
  <div className="profile-user-name">
    <p>{props.userProfileName}</p>
    <span > Local account </span>
  </div>
    </div>
    )

export default UserProfilePanel
