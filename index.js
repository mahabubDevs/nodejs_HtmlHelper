const fs = require("fs/promises");

(async () => {
  const CREATE_NAVBAR = "create navbar";
  const CREATE_ABOUT = "create about";
  const CREATE_TITTLE_HEADING = "create heading";
  const CREATE_FOOTER = "create footer";

  const DELETE_NAVBAR = "delete navbar";
  const DELETE_ABOUT = "delete about";
  const DELETE_TITTLE_HEADING = "delete heading";
  const DELETE_FOOTER = "delete footer";



  const commandFilePath = "./command.txt";
  const indexPath = "./index.html";

  // Initialize HTML file if it doesn't exist
  const initializeHTMLFile = async () => {
    try {
      await fs.access(indexPath); // Check if file exists
    } catch (e) {
      const initialContent = `


  <!DOCTYPE html>
  <html lang="en">
  <head>
  <title>Page Title</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
  * {
    box-sizing: border-box;
  }
  
  /* Style the body */
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }
  
  /* Header/logo Title */
  .header {
    padding: 80px;
    text-align: center;
    background: #1abc9c;
    color: white;
  }
  
  /* Increase the font size of the heading */
  .header h1 {
    font-size: 40px;
  }
  
  /* Style the top navigation bar */
  .navbar {
    overflow: hidden;
    background-color: #333;
  }
  
  /* Style the navigation bar links */
  .navbar a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
  }
  
  /* Right-aligned link */
  .navbar a.right {
    float: right;
  }
  
  /* Change color on hover */
  .navbar a:hover {
    background-color: #ddd;
    color: black;
  }
  
  /* Column container */
  .row {  
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
  }
  
  /* Create two unequal columns that sits next to each other */
  /* Sidebar/left column */
  .side {
    -ms-flex: 30%; /* IE10 */
    flex: 30%;
    background-color: #f1f1f1;
    padding: 20px;
  }
  
  /* Main column */
  .main {   
    -ms-flex: 70%; /* IE10 */
    flex: 70%;
    background-color: white;
    padding: 20px;
  }
  
  /* Fake image, just for this example */
  .fakeimg {
    background-color: #aaa;
    width: 100%;
    padding: 20px;
  }
  
  /* Footer */
  .footer {
    padding: 20px;
    text-align: center;
    background: #ddd;
  }
  
  /* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 700px) {
    .row {   
      flex-direction: column;
    }
  }
  
  /* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */
  @media screen and (max-width: 400px) {
    .navbar a {
      float: none;
      width: 100%;
    }
  }
  </style>
  </head>
  <body>
  
  <div class="header">
    <h1>My Website</h1>
    <p>A website created by me.</p>
  </div>
  
  <navbar>
    

  </navbar>
  
  
  <div class="row">
    <div class="side">
      <about>
      </about>
    </div>
    <div class="main">
      <heading>
      </heading>
      
    </div>
  </div>
  
  <footer>

  </footer>
  
  </body>
  </html>`
  
  await fs.writeFile(indexPath, initialContent, "utf-8");
}
};

// Appending navbar 
  const appendNavbarToHTML = async () => {
    const navbarHTML = `
<div style="display: flex; background-color: #333; padding: 12px;">
  <a href="#home" style="color: white; padding: 14px 20px; text-decoration: none; text-align: center;">Home</a>
  <a href="#about" style="color: white; padding: 14px 20px; text-decoration: none; text-align: center;">About</a>
  <a href="#services" style="color: white; padding: 14px 20px; text-decoration: none; text-align: center;">Services</a>
  <a href="#contact" style="color: white; padding: 14px 20px; text-decoration: none; text-align: center;">Contact</a>
</div>`;
    await appendToBody(navbarHTML);
    console.log(`Navbar added to ${indexPath}`);
  };

 // Append Footer to the HTML file

 const appendFooterToHTML = async () => {
  const footerHTML = `
<div class="footer">
  <h2>Footer</h2>
</div>`;
  await appendToBodyFooter(footerHTML);
  console.log(`Footer added to ${indexPath}`);
};

// Append About to the HTML file

const appendAboutToHTML = async () => {
  const aboutHTML = `
<h2>About Me</h2>
    <h5>Photo of me:</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    <h3>More Text</h3>
    <p>Lorem ipsum dolor sit ame.</p>
    <div class="fakeimg" style="height:60px;">Image</div><br>
    <div class="fakeimg" style="height:60px;">Image</div><br>
    <div class="fakeimg" style="height:60px;">Image</div>`;
  await appendToBodyAbout(aboutHTML);
  console.log(`About added to ${indexPath}`);
};
// Append Heading to the HTML file

const appendHeadingToHTML = async () => {
  const headingHTML = `
<h2>TITLE HEADING</h2>
    <h5>Title description, Dec 7, 2017</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>Some text..</p>
    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    <br>`;
  await appendToBodyHeading(headingHTML);
  console.log(`Heading added to ${indexPath}`);
};


  
  // Function to append navbar
  const appendToBody = async (content) => {
    // const navbarHTML = `<div class="navbar">Navbar Content</div>`;
    const html = await fs.readFile(indexPath, "utf-8");
    const updatedHTML = html.replace("</navbar>", `${content}\n</navbar>`);
    await fs.writeFile(indexPath, updatedHTML, "utf-8");
  };

// About part
const appendToBodyAbout = async (content) => {
  const html = await fs.readFile(indexPath, "utf-8");
  const updatedHTML = html.replace("</about>", `${content}\n</about>`);
  await fs.writeFile(indexPath, updatedHTML, "utf-8");
};

// Heading Part 
const appendToBodyHeading = async (content) => {
  const html = await fs.readFile(indexPath, "utf-8");
  const updatedHTML = html.replace("</heading>", `${content}\n</heading>`);
  await fs.writeFile(indexPath, updatedHTML, "utf-8");
};
// Footer part 
const appendToBodyFooter = async (content) => {
  const html = await fs.readFile(indexPath, "utf-8");
  const updatedHTML = html.replace("</footer>", `${content}\n</footer>`);
  await fs.writeFile(indexPath, updatedHTML, "utf-8");
};



  
  


  // Function to delete navbar content
  const deleteNavbarFromHTML = async () => {
    const html = await fs.readFile(indexPath, "utf-8");
    const updatedHTML = html.replace(/<navbar>.*<\/navbar>/s, "<navbar></navbar>");
    await fs.writeFile(indexPath, updatedHTML, "utf-8");
  };
  // Function to delete footer content
  const deleteFooterFromHTML = async () => {
    const html = await fs.readFile(indexPath, "utf-8");
    const updatedHTML = html.replace(/<footer>.*<\/footer>/s, "<footer></footer>");
    await fs.writeFile(indexPath, updatedHTML, "utf-8");
  };

  // Function to delete about content
  const deleteAboutFromHTML = async () => {
    const html = await fs.readFile(indexPath, "utf-8");
    const updatedHTML = html.replace(/<about>.*<\/about>/s, "<about></about>");
    await fs.writeFile(indexPath, updatedHTML, "utf-8");
  };
  // Function to delete footer content
  const deleteHeadingFromHTML = async () => {
    const html = await fs.readFile(indexPath, "utf-8");
    const updatedHTML = html.replace(/<heading>.*<\/heading>/s, "<heading></heading>");
    await fs.writeFile(indexPath, updatedHTML, "utf-8");
  };







  // Initialize HTML file on start
  await initializeHTMLFile();

  // Polling function to check for command changes in command.txt
  let lastCommand = "";
  const pollForCommand = async () => {
    try {
      const command = (await fs.readFile(commandFilePath, "utf-8")).trim();

      if (command && command !== lastCommand) {
        if (command === CREATE_NAVBAR) {
          await appendNavbarToHTML();
          console.log("Navbar created");
        } else if (command === DELETE_NAVBAR) {
          await deleteNavbarFromHTML();
          console.log("Navbar deleted");
        }
        if (command === CREATE_FOOTER) {
          await appendFooterToHTML();
          console.log("Footer created");
        } else if (command === DELETE_FOOTER) {
          await deleteFooterFromHTML();
          console.log("Footer deleted");
        }

        if (command === CREATE_ABOUT) {
          await appendAboutToHTML();
          console.log("About created");
        } else if (command === DELETE_ABOUT) {
          await deleteAboutFromHTML();
          console.log("About deleted");
        }

        if (command === CREATE_TITTLE_HEADING) {
          await appendHeadingToHTML();
          console.log("Headng created");
        } else if (command === DELETE_TITTLE_HEADING) {
          await deleteHeadingFromHTML();
          console.log("Heading deleted");
        }
        lastCommand = command;
      }
    } catch (e) {
      console.error("Error reading command file:", e);
    }
  };

  // Set interval to poll the command file every 1 second
  setInterval(pollForCommand, 1000);
})();
