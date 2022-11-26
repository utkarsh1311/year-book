const Profile = () => {
  return (
    <div className="flex flex-col p-4 bg-gray-800 text-white gap-6">
      <div className="w-28 h-28 bg-blue-600">
        <img src="" alt="" />
      </div>
      <div>
        <h2 className="text-4xl font-bold">Utkarsh Maurya</h2>
        <p className="text-sm">CS 3rd year</p>
        <p className="">I am a self-taught web developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience.</p>
      </div>
      <div className="flex gap-2 mt-4">
        <a href="www.github.com/utkarsh1311">Github</a>
        <a href="www.github.com/utkarsh1311">LinkedIn</a>
        <a href="www.github.com/utkarsh1311">Twitter</a>
        <a href="www.github.com/utkarsh1311">Mail</a>
      </div>
    </div>
  )
}

export default Profile;