CREATE TABEL mondaiset(
  id serial,
  name text,
  create_time timestamp,
  PRIMARY KEY (id));

CREATE TABEL mondai(
  id serial,
  mondaisetid int references mondaiset(id),
  mondaibun text,
  create_time timestamp,
  PRIMARY KEY(id));

CREATE TABLE sentakusi(
  id serial,
  mondaiid int references mondai(id),
  hyozimei text,
  hyozizyunn int,
  PRIMARY KEY(id));

CREATE TABLE answerset(
  id serial,
  answersetid int references mondaiset(id),
  start_time timestamp,
  stop_time timestamp,
  create_time timestamp);

CREATE TABEL answer(
  id serial,
  answersetid int references anserset(id),
  mondaiid int,
  seikai boolean,
  kaitou_sentakuid int,
  create_time timestamp);