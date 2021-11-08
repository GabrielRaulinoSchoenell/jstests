## what's a regular expression?

a way to learn patterns and implement it in the code. suported for any language

## start a regex

//      the code is written among this slashes
g       turn global, so don't stop the code execution
i       turn the code case insensitive

## what to put into the slashes

'()'      create a group
'[]'      wills interval
'{}'      max allowed characteres
'\'       allow special chars such as "-" or "%"
'^'       the validation starts at the start of the text
'$'       the validation ends at the end of the text
''        to insert 2 or more intervals in the group, you don't need to make anything, but put the new interval
'?'       makes optional
'|'       either one or another
'[^]'       remove from allowed chars to the regex

## special validators

A-z     takes from uppercase A to lower case z
\s      space
\t      tab
\n      line


## example

/a/g
My n_me is G_briel      the code will return these 2 matches


/([0-9]{4,})/       if the pattern has from 4 to more of it's pattern

_ _ _ _ _ - 837     didn't take the 837 cause it doesn't follow the rule of 4 or more

[a-z]{6,}           number or more
[a-z]+              one or more

/[!a-z]/            validates everything but what's inside the []

/(\"[A-z0-9]{1,}\"\:\"[A-z0-9]{1,}\"\,)/ JSON validator 