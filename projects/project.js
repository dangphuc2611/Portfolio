async function fetchProjects() {
      try {
        const response = await fetch('http://localhost:1337/api/projects'); // replace with your actual API
        const result = await response.json(); // get the JSON response
        // console.log(result);
        
        const projects = result.data; // access the array from result

        const container = document.getElementById('tab-display');
        container.innerHTML = ''; // clear previous content

        projects.forEach((project) => {
          const div = document.createElement('div');
          div.style.border = '1px solid #ccc';
          div.style.padding = '10px';
          div.style.marginBottom = '10px';

          div.innerHTML = `
            <h3>${project.projectName}</h3>
            <p><strong>Type:</strong> ${project.projectType}</p>
            <p><strong>Description:</strong> ${project.projectDescription}</p>
            <p><a href="${project.projectUrl}" target="_blank">View Project</a></p>
          `;

          container.appendChild(div);
        });
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }

    // Call it
    fetchProjects();