create table toei;
use toei;

create table users (
    createdAt timestamp default CURRENT_TIMESTAMP,
    uuid varchar(36) NOT NULL PRIMARY KEY,
    username varchar(16),
    password varchar(255)
);

create table results (
    id int(6) unsigned auto_increment PRIMARY KEY,
    recordAt timestamp default CURRENT_TIMESTAMP,
    temperature decimal(4,2),
    humidity decimal(4,2)
);

insert into toei.users (createdAt, uuid, username, password)
values  ('2021-04-27 14:26:05', '83199cc2-589b-442f-8f20-29449c9c28c1', 'test', 'test'),
        ('2021-04-28 07:27:01', '8ed1e7c0-f3d4-4a1b-93b9-8f54e1e1942b', 'Test2', 'test'),
        ('2021-04-28 07:47:35', 'c7db9a35-4d81-4e65-b926-15cdc24eef3b', 'Test3', 'test');

insert into toei.results (recordAt, temperature, humidity)
values  ('2021-04-27 14:26:47', 25, 59),
        ('2021-04-28 16:30:51', 25, 52),
        ('2021-04-28 16:31:11', 25, 52),
        ('2021-04-28 16:31:30', 25, 52),
        ('2021-04-28 16:31:57', 24, 57),
        ('2021-04-28 16:32:57', 25, 51),
        ('2021-04-28 16:33:08', 25, 50),
        ('2021-04-28 16:33:24', 25, 55),
        ('2021-04-28 16:33:52', 24, 54),
        ('2021-04-28 16:34:13', 26, 57),
        ('2021-04-28 16:34:46', 25, 60);