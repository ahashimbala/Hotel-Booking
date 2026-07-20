// GET /api/user/

export const getUserData = async(req, res) => {
    try {
        const role = req.user.role;
        const recentsearchedCities = req.user.recentsearchedCities;
        res.json({ success: true, role, recentsearchedCities })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// Store User Recent Searched Cities
export const storeRecentsearchedCities = async(req, res) => {
    try {
        const { recentSearchedCity } = req.body
        const user = await req.user;

        if (user.recentsearchedCities.length < 3) {
            user.recentsearchedCities.push(recentSearchedCity)
        } else {
            user.recentsearchedCities.shift();
            user.recentsearchedCities.push(recentSearchedCity)
        }
        await user.save();
        res.json({ success: true, message: "City added" })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}