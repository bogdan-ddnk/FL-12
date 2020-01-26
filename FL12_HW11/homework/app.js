const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

// Todo: your code goes here
const rootNode = document.getElementById('root');
function generateView(structure, ownerHtmlElement) {
  ownerHtmlElement = ownerHtmlElement || 'root';
  for (let i = 0; i < structure.length; i++) {
    const p = ownerHtmlElement.appendChild(document.createElement('p'));
    p.className = structure[i].folder ? 'folder folded' : 'file';
    p.innerHTML = `<i class="material-icons"></i>${structure[i].title}`;
    if (structure[i].folder) {
      p.addEventListener('click', e => e.target.classList.toggle('folded'));
      const div = ownerHtmlElement.appendChild(document.createElement('div'));
      if (Array.isArray(structure[i].children)) {
        generateView(structure[i].children, div);
      } else {
        div.innerHTML = '<p class="empty_folder">Folder is empty</p>';
      }
    }
  }
}


generateView(structure, rootNode);

