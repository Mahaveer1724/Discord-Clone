const createDMKey = (user1, user2) => {
    const dm_key = [user1, user2].sort().join('_')

    return dm_key
}

module.exports = createDMKey