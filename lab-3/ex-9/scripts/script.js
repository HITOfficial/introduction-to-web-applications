class ActualEmployee {
    constructor() {
        this.index = 0;
    }
}


function cardChanger() {
    const employees = [
        { fullName: 'Peter Piotrowski', funct: 'intern', src: 'images/p1.jpg', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis vel incidunt quo tempora voluptates laborum voluptatem officia quibusdam aliquid explicabo alias repellat ab suscipit omnis voluptate, natus fugit iusto. Similique mollitia esse iusto, id pariatur labore, quos, eaque iure doloribus accusamus quam facilis laudantium nesciunt nam quo commodi a minima ex officia voluptatem in nostrum? Vitae officiis adipisci ullam. Autem quaerat dicta nostrum tempora dignissimos esse, minima modi, fuga eligendi ipsam doloremque libero id adipisci consequatur impedit ex quasi, asperiores provident eos. Magni est nisi recusandae similique perspiciatis obcaecati.' },
        { fullName: 'Ann Nowak', funct: 'web designer', src: 'images/p2.jpg', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At minus suscipit perspiciatis deserunt neque velit nam iure error voluptate architecto. Accusantium placeat voluptates veniam? Porro aut itaque eius fugit sapiente! Adipisci eaque porro, ullam obcaecati autem possimus eius inventore earum vero voluptate repudiandae facere sint rem. Nesciunt voluptatibus saepe, inventore corrupti, culpa tempora totam ipsam vitae debitis delectus, aliquid illo. Laboriosam soluta at consequatur, inventore a dolorum atque quod dignissimos accusamus asperiores omnis eius nesciunt quos amet excepturi, quam iste architecto? Totam adipisci accusamus minima cum fugit voluptatem reiciendis perferendis.' },
        { fullName: 'Johanna Brown', funct: 'boss', src: 'images/p3.jpg', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad id aspernatur, accusantium illum iure consequatur? Sint laudantium officia velit tempore numquam, ipsa quaerat quam dicta fuga sequi, nostrum architecto nihil? Libero necessitatibus amet in deserunt eius temporibus? Aut tenetur est hic molestias dicta possimus, ipsum voluptate reiciendis cum earum dolores, molestiae, consequuntur veniam eligendi officia eum accusantium commodi excepturi repellat? Tempora laboriosam iusto dolores obcaecati assumenda sint, sequi quis? Quibusdam nemo, eaque molestias quia temporibus accusamus culpa quasi molestiae neque est? Aliquam voluptatibus ipsa, distinctio ullam velit esse consequatur tenetur!' },
        { fullName: 'Katy Edson', funct: 'consultant', src: 'images/p4.jpg', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quos sint ut eligendi repellat aperiam nam ea error odio saepe, harum aut quo maiores facilis temporibus et illum exercitationem recusandae. Quia fuga vero corporis reprehenderit asperiores ducimus iure maxime sunt ex voluptas voluptatum, delectus non nemo obcaecati cupiditate officiis dolorem cum. Voluptatibus, harum ut pariatur quia non modi saepe facere? Dolores consequatur nostrum ea ullam sit esse ipsa quam voluptatem suscipit itaque a accusantium, beatae pariatur modi, commodi, placeat nesciunt molestias dolorum temporibus? Neque unde deserunt voluptates eaque consequatur possimus?' },
        { fullName: 'Johanna Edward', funct: 'accountant', src: 'images/p5.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quis nisi sed dicta unde, quo corrupti itaque laborum voluptatibus laudantium quam distinctio velit pariatur similique natus, possimus ullam recusandae, voluptates omnis officia excepturi facere. Numquam similique deserunt harum ducimus unde voluptatum suscipit reiciendis reprehenderit est, ad laudantium, dolore aliquid rerum recusandae! Ad cum mollitia possimus aliquam omnis. Officiis minima atque error, ratione saepe ut ea esse a sint id! Velit unde corporis tempora accusamus itaque temporibus reprehenderit quisquam explicabo nemo autem provident placeat pariatur ipsa, fugit dolorum incidunt cumque aut praesentium corrupti!' },
        { fullName: 'Bubmba Ki', funct: 'designer', src: 'images/p6.jpg', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda provident fuga optio repellendus enim. Aliquam, illum eius deserunt molestiae inventore reprehenderit corporis, ut eos consequuntur veniam voluptas consectetur et error qui quos quae quisquam, voluptate eligendi? Porro doloribus placeat ea quis. Fuga, eligendi quia modi sint odit dolores? Eum veritatis inventore in consectetur velit placeat eaque alias totam quae! Pariatur inventore dolorum modi architecto aliquid, sapiente expedita sequi atque earum obcaecati consectetur voluptatem doloribus quibusdam doloremque beatae saepe sunt voluptatum illum tempore sint consequatur! Numquam illo expedita alias veritatis totam?' },
        { fullName: 'John Bravo', funct: 'programer', src: 'images/p7.jpg', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eaque exercitationem architecto magni nihil quas veniam recusandae blanditiis quod quam, quo dolores, libero facere a culpa debitis vero at consequuntur nisi reprehenderit voluptatem quis fugiat praesentium? Porro distinctio sint repellat qui consectetur officiis corrupti enim aspernatur perferendis, laudantium hic iure ipsum voluptatem in et temporibus, nemo laborum modi minima asperiores. Sed id veniam totam corrupti inventore deserunt perferendis odit a quos tenetur officia natus culpa labore exercitationem, explicabo reiciendis numquam officiis. Voluptatem optio, veniam harum qui impedit eum perspiciatis voluptate.' }
    ]

    const actualEmployee = new ActualEmployee();

    const imageElement = document.querySelector('.image');
    const fullNameElement = document.querySelector('.full-name');
    const functionElement = document.querySelector('.function');
    const descriptionElement = document.querySelector('.description');

    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const random = document.querySelector('.random');

    left.addEventListener('click', () => changeEmployeeCard(employees, actualEmployee, imageElement, fullNameElement, functionElement, descriptionElement, -1))
    right.addEventListener('click', () => changeEmployeeCard(employees, actualEmployee, imageElement, fullNameElement, functionElement, descriptionElement, 1))
    random.addEventListener('click', () => changeEmployeeCard(employees, actualEmployee, imageElement, fullNameElement, functionElement, descriptionElement, null))

}


function changeEmployeeCard(employees, actualEmployee, imageElement, fullNameElement, functionElement, descriptionElement, changer) {
    if (changer === null) {
        changer = Math.floor(Math.random() * employees.length)
        // if random was equal 0 -> changing changer to 1;
        if (changer === 0) {
            changer = 1;
        }
    }

    // changing index, without negative indexes
    if (actualEmployee.index + changer >= employees.length) {
        actualEmployee.index = (actualEmployee.index + changer) % employees.length;
    } else if (actualEmployee.index + changer < 0) {
        actualEmployee.index = employees.length + actualEmployee.index + changer;
    }
    else {
        actualEmployee.index = actualEmployee.index + changer;
    }

    // Nodes changing
    index = actualEmployee.index;
    imageElement.style.backgroundImage = `url(${employees[index].src})`;
    fullNameElement.innerText = employees[index].fullName;
    functionElement.innerText = employees[index].funct;
    descriptionElement.innerText = employees[index].desc;
}


window.onload = cardChanger