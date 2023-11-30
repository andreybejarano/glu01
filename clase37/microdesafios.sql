# MD 1.1 - Forma basica de un inner join sin las palabras inner join
select series.title, genres.name  
from series, genres
where series.genre_id = genres.id;
# MD 1.1 - Forma basica usando inner join
select s.title, g.name
from series s
inner join genres g on s.genre_id = g.id;
# MD 1.2
select e.title, a.first_name, a.last_name 
from episodes e 
inner join actor_episode ae on ae.episode_id = e.id
inner join actors a on ae.actor_id = a.id;
## mostrar el titulo de la serie con los actores de cada episodio, el titulo del episodio, el titulo de la temporada 
select 
s.title as serie_title,
CONCAT(a.first_name, ' ', a.last_name) as actor,
e.title as episode_title,
s2.title as season_title
from series s 
inner join seasons s2 on s2.serie_id = s.id
inner join episodes e on e.season_id = s2.id
inner join actor_episode ae on ae.episode_id = e.id
inner join actors a on a.id = ae.actor_id
order by s.title, s2.number;
# MD 2
select DISTINCT a.first_name, a.last_name 
from movies m 
inner join actor_movie am on am.movie_id = m.id
inner join actors a on a.id = am.actor_id
where m.title like '%la guerra de las galaxias%';
# MD 3
select m.title, COALESCE(g.name, 'No tiene genero') as genre
from movies m 
left join genres g on g.id = m.genre_id;
# MD 4
select title, DATEDIFF(end_date, release_date) as duracion
from series;
# MD 5.1
select * from actors 
where length(first_name) > 6 
order by first_name;
# MD 5.2
select count(*) as total_eposides from episodes;
# MD 5.3
select s.title, count(s2.id)
from series s
inner join seasons s2 on s2.serie_id = s.id
group by s.id;
# MD 5.4
select g.name, count(m.id) as total_movies
from genres g
inner join movies m on m.genre_id = g.id
group by g.id
having count(m.id) >= 3;





