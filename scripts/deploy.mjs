import dotenv from "dotenv";
import FtpDeploy from "ftp-deploy";
import path from 'path';

dotenv.config({ path: "./.env" });

async function main() {
  try {
        // Replace "/out" with your build directory which contains all generated static files
        const outDir = path.join(process.cwd(), "/out");
        console.log("Uploading files to FTP server...")
        await new FtpDeploy().deploy({
            user: process.env.FTP_USER,
            password: process.env.FTP_PASS,
            host: process.env.FTP_HOST,
            port: process.env.FTP_PORT,

            localRoot: outDir, // Location of build files in project
            remoteRoot: "/", // Upload location on remote, replace with subfolder on FTP-server if required

            include: ["*", "**/*"], // Upload all files from build folder
            exclude: [], // Exclude no files

            deleteRemote: false, // Set to true if you want to delete ALL FILES in the remote root before uploading
            forcePasv: true // Use passive mode
        })

        console.log("Succesfully deployed site")
        return 0;
    } catch (e) {
        console.error("An error occured during deployment:", e);
        return 1;
  }
}

main().then((code) => process.exit(code));