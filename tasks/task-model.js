const db=require('../data/config');


module.exports={
    find,
    findById,
    findResources,
    add,
    update,
    remove
}

function find() {
    return db("task");
}

  
  
function findById(id) {
    return db("task")
      .where({ id })
      .first();
}

function add(task) {
    return db("task").insert(task, "id");
}

function update(id, changes) {
    return db("task")
      .where({ id })
      .update(changes);
  }


function remove(id) {
    return db("task")
      .where({ id })
      .del();
}


function findResources(id) {
    return db("resource")
      .join("task", "task.id", "resource.task_id")
      .select("task.name", "resource.name", "resource.description")
      .where("task_id", id);
}