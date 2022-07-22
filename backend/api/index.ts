import app from "./app";
import mongooseConfig from "./config/mongoose-config";

mongooseConfig(`${process.env.MONGO_URI}`);

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
