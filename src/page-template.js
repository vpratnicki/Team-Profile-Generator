
const generateManager = (manager) => {
    return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">${manager.name}<br/>${manager.role}</h2>
      <p>${manager.id}</p>
      <p>${manger.email}</p>
      <p>${manager.officeNumber}</p>

    </section>
  `;
};

