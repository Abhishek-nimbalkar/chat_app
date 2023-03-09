const addPost = (data) => {
    const oldData=getPostsData();
    const newData=[...oldData,data]
    const stringifyData = JSON.stringify(newData)
    fs.writeFileSync(dataPath, stringifyData)
}

module.exports={addPost}