const db = require("../DataBase/db");


exports.createData = (req, res) => {
  let data = {
    username: req.body.username,
    age: req.body.age,
    email: req.body.email,
    city: req.body.city,
    pincode: req.body.pincode,
    photo: req.file.filename,
  };
  console.log("dhamu", data);

  db.query("INSERT INTO userdata set ?", [data], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  });
};


exports.getAllData = (req, res) => {
  db.query(
    "SELECT * FROM gallery.userdata limit 3 offset ?",
    parseInt(req.query.currentPage),
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};

exports.getById = (req, res) => {
  const id = req.params.id;
  console.log(id);
  db.query(`SELECT * FROM userdata where id = ? `, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

exports.updateData = (req, res) => {
  const id = req.params.id;
  const { username, age, email, city, pincode } = req.body;
  db.query(
    "UPDATE userdata SET username = ?, age = ?, email = ?, city = ?, pincode = ? WHERE id = ?",
    [username, age, email, city, pincode, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};

exports.deleteData = (req, res) => {
  const id = req.params.id;
  console.log(id);
  db.query("DELETE FROM userdata WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
