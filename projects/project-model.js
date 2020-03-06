const db=require('../data/config');


module.exports={
    find,
    findById,
    findTasks,
    add,
    update,
    remove
}

function find() {
    return db("project");
}

  
  
function findById(id) {
    return db("project")
      .where({ id })
      .first();
}

function add(project) {
    return db("project").insert(project, "id");
}

function update(id, changes) {
    return db("project")
      .where({ id })
      .update(changes);
  }


function remove(id) {
    return db("project")
      .where({ id })
      .del();
}
function findTasks(id) {
    return db("task")
      .join("project", "project.id", "task.project_id")
      .select("project.name", "task.name", "task.description")
      .where("project_id", id);
}

