const db=require('../data/config');


module.exports={
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db("resource");
}

  
  
function findById(id) {
    return db("resource")
      .where({ id })
      .first();
}

function add(user) {
    return db("resource").insert(user, "id");
}

function update(id, changes) {
    return db("resource")
      .where({ id })
      .update(changes);
  }


function remove(id) {
    return db("resource")
      .where({ id })
      .del();
}

