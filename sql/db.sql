create table if not exists projects
(
    id           serial primary key,
    name         text not null check (name <> ''),
    priority     integer,
    description  text,
    delivery_date date not null
);

create table if not exists tasks
(
    id        serial primary key,
    name      text not null check (name <> ''),
    status    bool not null,
    projectid serial references projects (id)
);