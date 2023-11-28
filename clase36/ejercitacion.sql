# 1.1
insert into genres (name, ranking, active) values ('Investigacion', 13, true);
# 1.2
update genres set name='Investigacion cientifica' where id=13;
# 1.3
delete from genres where id=13;
#1.4
select * from movies;
#1.5
select first_name, last_name, rating from actors;
#1.6
select title as Titulo from series;

# 2.1
select first_name, last_name from actors where rating > 7.5;
# 2.2
select title, rating, awards from movies where rating > 7.5 and awards > 2;
# 2.3
select title, rating from movies order by rating asc;

# 3.1
select title from movies limit 3;
# 3.2
select * from movies order by rating desc limit 10;
# 3.3
select * from movies order by rating desc limit 5 offset 5;
# offset = limit * (NumPagina - 1)
# offset = 5 * (1 - 1) pagina 1 
# offset = 5 * (2 - 1) = 5  pagina 2
# offset = 5 * (3 - 1) = 10
# 3.4
select * from actors;
# offset = 10 * (1 - 1)
select * from actors limit 10 offset 0;
# offset = 10 * (2 - 1)
select * from actors limit 10 offset 10;
# offset = 10 * (3 - 1)
select * from actors limit 10 offset 20;
select * from actors limit 10 offset 40;

# 4.1
select title, rating from movies where title like '%harry potter%';
# 4.2 
select * from actors where first_name like 'sam%';
# 4.3
select title from movies where release_date between '2004-01-01' and '2008-12-31';
select title from movies where year(release_date) between 2004 and 2008;








