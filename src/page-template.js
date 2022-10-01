
const generateManager = () => {
    return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
      <p>${manager.name}</p>
      <p>${manager.role}</p>
      <p>${manager.id}</p>
      <p>${manger.email}</p>
      <p>${manager.officeNumber}</p>

    </section>
  `;
};