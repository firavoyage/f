notes

jun 2026

18

16 20 result handle from result. it does not actually make anything explicit.

whether handle or not, you dont know if it could err, and you dont know the possible error types as well. it's just a blind try catch, yet it eats the error stack, prevents the default behavior or the engine, and makes debugging much more frustrating.

better to research and abstract explicitly, when you want to handle. it's ok to let it panic sometimes.

16 20 rename `rescue` to `is_error`

gradually, as i adopt react. react has state and setstate.

you could not overcome the structure barrier of the language itself.

you should enforce structural clarity and consistency over saving a few typings on dx on naming. well, rescue conflicts with return, which does not make it actually clearer.

another option is `did_err`, obviously it's no good.


