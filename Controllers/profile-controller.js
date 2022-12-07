const Profile = require("../Modules/Profile");



exports.getProfileByid = async (req, res) =>{

  const {profileId}= req.params
  try {
    
    const profile = await Profile.findById(profileId)
    if (!profile) {
      return res.status(300).json({message:"no profile found"})
    }
    res.status(200).json(profile)
  } catch (error) {
    console.error
  }

  }


exports.updateProfile = async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  try {
    const profile = await Profile.findByIdAndUpdate({ _id: id }, body, {
      new: true,
    });
    await profile.save();

    res.status(200).json({ profile });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
