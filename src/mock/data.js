function daysToMilliseconds(days) {
  return days * 24 * 60 * 60 * 1000;
}
const data = [
  [
    "1316054",
    "SSJ-45",
    "SSJ",
    new Date(2020, 8, 13),
    new Date(2020, 8, 16),
    daysToMilliseconds(3),
    100,
    "1334428",
  ],
  [
    "1334428",
    "LOK-620",
    "LOK",
    new Date(2020, 7, 29),
    new Date(2020, 8, 12),
    daysToMilliseconds(13),
    100,
    null,
  ],

  [
    "1312345",
    "SSJ-93",
    "SSJ",
    new Date(2020, 8, 20),
    new Date(2020, 8, 25),
    daysToMilliseconds(5),
    100,
    "1312346",
  ],
  [
    "1312346",
    "LOK-739",
    "LOK",
    new Date(2020, 8, 15),
    new Date(2020, 8, 19),
    daysToMilliseconds(4),
    100,
    "1312347",
  ],
  [
    "1312347",
    "BAP-14",
    "BAPI",
    new Date(2020, 8, 6),
    new Date(2020, 8, 12),
    daysToMilliseconds(6),
    100,
    null,
  ],
];

export default data;
