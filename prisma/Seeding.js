// import { Prisma, PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// const Schools = [
//   {
//     Id: 1,
//     Name: "Nguyen Hue",
//     Address: "Dien Thang Bac",
//   },
//   {
//     Id: 2,
//     Name: "Nguyen Trai",
//     Address: "Dien Thang Nam",
//   },
//   {
//     Id: 3,
//     Name: "Kim Dong",
//     Address: "Vinh Dien",
//   }
// ]

// const Classes = [
//   {
//     Id: 4,
//     Name: "1A",
//     SchoolId: 1,
//   },
//   {
//     Id: 5,
//     Name: "1B",
//     SchoolId: 2,
//   },
//   {
//     Id: 6,
//     Name: "1C",
//     SchoolId: 3,
//   },
//   {
//     Id: 7,
//     Name: "1D",
//     SchoolId: 1,
//   },
// ]

// const Officers = [
//   {
//     Id: 8,
//     Name: "Phuong",
//     Major: "Hoa",
//     ClassId: 4,
//   },
//   {
//     Id: 9,
//     Name: "Thu",
//     Major: "Toan",
//     ClassId: 5,
//   },
//   {
//     Id: 10,
//     Name: "Thai",
//     Major: "GDCD",
//     ClassId: 6,
//   },
// ]

// const Students = [
//   {
//     Id: 11,
//     Name: "AnhThu",
//     Age: 22,
//     Address: "BinhDinh",
//     ClassId: 4,
//   },
//   {
//     Id: 12,
//     Name: "VanThai",
//     Age: 22,
//     Address: "QuangNam",
//     ClassId: 5,
//   },
//   {
//     Id: 13,
//     Name: "NgocKy",
//     Age: 25,
//     Address: "HaLan",
//     ClassId: 6,
//   },
//   {
//     Id: 14,
//     Name: "HoaBan",
//     Age: 16,
//     Address: "Hue",
//     ClassId: 7,
//   },
//   {
//     Id: 15,
//     Name: "HoaHue",
//     Age: 18,
//     Address: "HaTinh",
//     ClassId: 4,
//   }
// ]


// const main = async () => {
//   Students.forEach(async (std)  => {
//     console.log(std)
//     const user = await prisma.student.create({
//       data: std
//     })
//     console.log(user)
//   })
// }

// main().then(async () => {
//   await prrisma.$disconnect();
// })
// .catch(async (e) => {
//   await prisma.$disconnect();
// })


import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Schools = [
  {
    Id: 1,
    Name: "Nguyen Hue",
    Address: "Dien Thang Bac",
  },
  {
    Id: 2,
    Name: "Nguyen Trai",
    Address: "Dien Thang Nam",
  },
  {
    Id: 3,
    Name: "Kim Dong",
    Address: "Vinh Dien",
  }
]

const Classes = [
  {
    Id: 4,
    Name: "1A",
    SchoolId: 1,
  },
  {
    Id: 5,
    Name: "1B",
    SchoolId: 2,
  },
  {
    Id: 6,
    Name: "1C",
    SchoolId: 3,
  },
  {
    Id: 7,
    Name: "1D",
    SchoolId: 1,
  },
]

const Officers = [
  {
    Id: 8,
    Name: "Phuong",
    Major: "Hoa",
    ClassId: 4,
  },
  {
    Id: 9,
    Name: "Thu",
    Major: "Toan",
    ClassId: 5,
  },
  {
    Id: 10,
    Name: "Thai",
    Major: "GDCD",
    ClassId: 6,
  },
]

const Students = [
  {
    Id: 11,
    Name: "AnhThu",
    Age: 22,
    Address: "BinhDinh",
    ClassId: 4,
  },
  {
    Id: 12,
    Name: "VanThai",
    Age: 22,
    Address: "QuangNam",
    ClassId: 5,
  },
  {
    Id: 13,
    Name: "NgocKy",
    Age: 25,
    Address: "HaLan",
    ClassId: 6,
  },
  {
    Id: 14,
    Name: "HoaBan",
    Age: 16,
    Address: "Hue",
    ClassId: 7,
  },
]


const main = async () => {
  const schools = await prisma.school.createMany({
    data: Schools
  })
  const classes = await prisma.class.createMany({
    data: Classes
  })
  const officer = await prisma.officer.createMany({
    data: Officers
  })
  const users = await prisma.student.createMany({
    data: Students
  })
  return users
}

main().then(async (x) => {
  console.log(x)
  await prrisma.$disconnect();
})
.catch(async (e) => {
  await prisma.$disconnect();
})