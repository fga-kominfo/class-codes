menentukan bilangan genap atau ganjil

create variable NUMBER with any number
IF NUMBER modulo 2 EQUALS TO 0
PRINT 'Genap'
ELSE
PRINT 'Ganjil'

menghitung jumlah bilangan genap dan bilangan ganjil dalam array of numbers
create variable NUMBERS with value ARRAY OF NUMBERS
create variable GENAP with value 0
create variable GANJIL with value 0
FOR number in NUMBERS
IF typeof NUMBER NOT EQUALS TO 'number'
continue
IF NUMBER modulo 2 EQUALS TO 0
INCREMENT genap by 1
ELSE
INCREMENT ganjil by 1
END FOR

PRINT 'Ganjil: <ganjil> Genap: <genap>'
