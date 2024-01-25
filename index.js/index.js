//1_no
function kubiniTopish(son) {
  return son ** 3;
}

console.log(kubiniTopish(2)); // 8
console.log(kubiniTopish(5)); // 125
console.log(kubiniTopish(10)); // 1000

function kubiniTopish(son) {
  return son * son * son;
}

console.log(kubiniTopish(2)); // 8
console.log(kubiniTopish(5)); // 125
console.log(kubiniTopish(10)); // 1000

function kubiniTopish(son) {
  return Math.pow(son, 3);
}

console.log(kubiniTopish(2)); // 8
console.log(kubiniTopish(5)); // 125
console.log(kubiniTopish(10)); // 1000

//no_2

function ikkitaSonningKvadrati(son1, son2) {
  let kattaSon = Math.max(son1, son2);
  return Math.pow(kattaSon, 2);
}

console.log(ikkitaSonningKvadrati(2, 5)); // 25
console.log(ikkitaSonningKvadrati(10, 3)); // 100
console.log(ikkitaSonningKvadrati(7, 7)); // 49


function ikkitaSonningKvadrati(son1, son2) {
  if (son1 > son2) {
    return son1 * son1;
  } else {
    return son2 * son2;
  }
}

console.log(ikkitaSonningKvadrati(2, 5)); // 25
console.log(ikkitaSonningKvadrati(10, 3)); // 100
console.log(ikkitaSonningKvadrati(7, 7)); // 49


function ikkitaSonningKvadrati(son1, son2) {
  let kattaSon = son1 > son2 ? son1 : son2;
  return kattaSon * kattaSon;
}

console.log(ikkitaSonningKvadrati(2, 5)); // 25
console.log(ikkitaSonningKvadrati(10, 3)); // 100
console.log(ikkitaSonningKvadrati(7, 7)); // 49

//no_3

function raqamlarYigindisi(son) {
  let birinchiRaqam = Math.floor(son / 100); // Yuzliklar razryadi
  let ikkinchiRaqam = Math.floor((son % 100) / 10); // O'nliklar razryadi
  let uchinchiRaqam = son % 10; // Birliklar razryadi

  return birinchiRaqam + ikkinchiRaqam + uchinchiRaqam;
}

console.log(raqamlarYigindisi(123)); // 6 (1 + 2 + 3)
console.log(raqamlarYigindisi(456)); // 15 (4 + 5 + 6)
console.log(raqamlarYigindisi(789)); // 24 (7 + 8 + 9)


function raqamlarYigindisi(son) {
  let sonString = son.toString();
  let birinchiRaqam = parseInt(sonString[0]);
  let ikkinchiRaqam = parseInt(sonString[1]);
  let uchinchiRaqam = parseInt(sonString[2]);

  return birinchiRaqam + ikkinchiRaqam + uchinchiRaqam;
}

console.log(raqamlarYigindisi(123)); // 6 (1 + 2 + 3)
console.log(raqamlarYigindisi(456)); // 15 (4 + 5 + 6)
console.log(raqamlarYigindisi(789)); // 24 (7 + 8 + 9)


function raqamlarYigindisi(son) {
  let birinchiRaqam = Math.floor(son / 100); // Yuzliklar razryadi
  let qoldiq1 = son % 100; // Yuzliklar qoldig'i
  let ikkinchiRaqam = Math.floor(qoldiq1 / 10); // O'nliklar razryadi
  let uchinchiRaqam = qoldiq1 % 10; // Birliklar razryadi

  return birinchiRaqam + ikkinchiRaqam + uchinchiRaqam;
}

console.log(raqamlarYigindisi(123)); // 6 (1 + 2 + 3)
console.log(raqamlarYigindisi(456)); // 15 (4 + 5 + 6)
console.log(raqamlarYigindisi(789)); // 24 (7 + 8 + 9)

//no_4

function boluvchilarniTopish(son) {
  let boluvchilar = [];

  for (let i = 1; i <= son; i++) {
    if (son % i === 0) {
      boluvchilar.push(i);
    }
  }

  return boluvchilar;
}

console.log(boluvchilarniTopish(12)); // [1, 2, 3, 4, 6, 12]
console.log(boluvchilarniTopish(20)); // [1, 2, 4, 5, 10, 20]
console.log(boluvchilarniTopish(7)); // [1, 7]


function boluvchilarniTopish(son) {
  let boluvchilar = [];

  for (let i = 1; i <= Math.sqrt(son); i++) {
    if (son % i === 0) {
      boluvchilar.push(i);

      if (son / i !== i) {
        boluvchilar.push(son / i);
      }
    }
  }

  return boluvchilar;
}

console.log(boluvchilarniTopish(12)); // [1, 2, 3, 4, 6, 12]
console.log(boluvchilarniTopish(20)); // [1, 2, 4, 5, 10, 20]
console.log(boluvchilarniTopish(7)); // [1, 7]


function boluvchilarniTopish(son) {
  let boluvchilar = Array.from(Array(son + 1).keys()).filter(
    (num) => son % num === 0
  );

  return boluvchilar;
}

console.log(boluvchilarniTopish(12)); // [1, 2, 3, 4, 6, 12]
console.log(boluvchilarniTopish(20)); // [1, 2, 4, 5, 10, 20]
console.log(boluvchilarniTopish(7)); // [1, 7]

//no_5

function toqSonlarYigindisi(n) {
  let yigindi = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      yigindi += i;
    }
  }

  return yigindi;
}

console.log(toqSonlarYigindisi(10)); // 25 (1 + 3 + 5 + 7 + 9)
console.log(toqSonlarYigindisi(15)); // 64 (1 + 3 + 5 + 7 + 9 + 11 + 13 + 15)


function toqSonlarYigindisi(n) {
  let yigindi = 0;

  for (let i = 1; i <= n; i += 2) {
    yigindi += i;
  }

  return yigindi;
}

console.log(toqSonlarYigindisi(10)); // 25 (1 + 3 + 5 + 7 + 9)
console.log(toqSonlarYigindisi(15)); // 64 (1 + 3 + 5 + 7 + 9 + 11 + 13 + 15)


function toqSonlarYigindisi(n) {
  let sonlarSoni = Math.ceil(n / 2);
  let yigindi = sonlarSoni * sonlarSoni;

  return yigindi;
}

console.log(toqSonlarYigindisi(10)); // 25 (1 + 3 + 5 + 7 + 9)
console.log(toqSonlarYigindisi(15)); // 64 (1 + 3 + 5 + 7 + 9 + 11 + 13 + 15)

//no_7

function tubSonTekshirish(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(tubSonTekshirish(7)); // true
console.log(tubSonTekshirish(12)); // false

function tubSonTekshirish(n) {
  if (n < 2 || (n > 2 && n % 2 === 0)) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(tubSonTekshirish(7)); // true
console.log(tubSonTekshirish(12)); // false

function tubSonTekshirish(n) {
  if (n < 2) {
    return false;
  }

  return [...Array(Math.floor(Math.sqrt(n)) + 1).keys()].slice(2).every(
    (num) => n % num !== 0
  );
}

console.log(tubSonTekshirish(7)); // true
console.log(tubSonTekshirish(12)); // false



//no_8

function palindromTekshirish(n) {
  let str = String(n);
  let reverseStr = str.split('').reverse().join('');

  return str === reverseStr;
}

console.log(palindromTekshirish(121)); // true
console.log(palindromTekshirish(123)); // false

function palindromTekshirish(n) {
  let birliklar = n % 10;
  let onliklar = Math.floor(n / 10) % 10;
  let yuzliklar = Math.floor(n / 100);

  return birliklar === yuzliklar && onliklar === onliklar;
}

console.log(palindromTekshirish(121)); // true
console.log(palindromTekshirish(123)); // false

function palindromTekshirish(n) {
  let birliklar = n % 10;
  let onliklar = Math.floor((n % 100) / 10);
  let yuzliklar = Math.floor(n / 100);

  return birliklar === yuzliklar && onliklar === onliklar;
}

console.log(palindromTekshirish(121)); // true
console.log(palindromTekshirish(123)); // false