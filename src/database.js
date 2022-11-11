import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect(
      "mongodb+srv://FedeBayer:admin@cluster0.gvnpysm.mongodb.net/test"
    );
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
