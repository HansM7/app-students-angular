# Aplicacion Angular

Temas puntuales 🚀.

## Como usarlo?

Es super fácil 😎

Solo deberás instalar las dependencias indicadas

```bash
  npm install
```

## Recomendación de json-server

Deberás tener este formato y te dejo un poco de data para que puedas probar 👀

```javascript
{
  "users": [
    {
      "fullname": "Hans admin",
      "email": "hans@gmail.com",
      "role": "admin",
      "password": "12345",
      "id": 5
    },
    {
      "fullname": "Jorge Medina",
      "email": "jorge@gmail.com",
      "role": "user",
      "password": "12345",
      "id": 6
    }
  ],
  "teachers": [
    {
      "id": 1,
      "fullname": "Juan Teachers",
      "enabled": "disabled",
      "course": [
        {
          "id": 2,
          "title": "React",
          "description": "Specialist in React 2023",
          "type": [
            "PROGRAMMING",
            "TECHNOLOGY"
          ],
          "enabled": true
        }
      ]
    }
  ],
  "students": [
    {
      "id": 2,
      "name": "sarahhh",
      "lastname": "Johnson",
      "email": "sarah.johnson@example.com",
      "enabled": true,
      "courses": [
        {
          "course": {
            "id": 1,
            "title": "Java",
            "description": "Specialist in Java 2023",
            "type": [
              "PROGRAMMING",
              "TECHNOLOGY"
            ],
            "enabled": true,
            "url": "https://static-00.iconduck.com/assets.00/java-icon-2048x2048-yxty4s2p.png"
          },
          "finished": false
        },
        {
          "course": {
            "id": 2,
            "title": "React",
            "description": "Specialist in React 2023",
            "type": [
              "PROGRAMMING",
              "TECHNOLOGY"
            ],
            "enabled": true,
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          },
          "finished": false
        }
      ]
    },
    {
      "name": "Example",
      "lastname": "Example lastanem",
      "email": "a@gmail.com",
      "course": "1",
      "enabled": true,
      "courses": [
        {
          "course": {
            "id": 1,
            "title": "Java",
            "description": "Specialist in Java 2023",
            "type": [
              "PROGRAMMING",
              "TECHNOLOGY"
            ],
            "enabled": true,
            "url": "https://static-00.iconduck.com/assets.00/java-icon-2048x2048-yxty4s2p.png"
          },
          "finished": false
        }
      ],
      "id": 3
    }
  ],
  "courses": [
    {
      "id": 1,
      "title": "Java",
      "description": "Specialist in Java 2023",
      "type": [
        "PROGRAMMING",
        "TECHNOLOGY"
      ],
      "enabled": true,
      "url": "https://static-00.iconduck.com/assets.00/java-icon-2048x2048-yxty4s2p.png"
    },
    {
      "id": 2,
      "title": "React",
      "description": "Specialist in React 2023",
      "type": [
        "PROGRAMMING",
        "TECHNOLOGY"
      ],
      "enabled": true,
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
    },
    {
      "id": 3,
      "title": "Power BI",
      "description": "Specialist in Power BI 2023",
      "type": [
        "DATA",
        "TECHNOLOGY"
      ],
      "enabled": true,
      "url": "https://static-00.iconduck.com/assets.00/power-bi-icon-1536x2048-0xah5g2o.png"
    },
    {
      "title": "GO",
      "description": "course go",
      "url": "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_go_gopher_icon_130571.png",
      "type": [
        "PROGRAMMING",
        "TECHNOLOGY"
      ],
      "enabled": true,
      "id": 4
    }
  ]
}
```
