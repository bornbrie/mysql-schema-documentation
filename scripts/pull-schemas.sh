#!/bin/bash

# Run the script to create a list of numbered schema files that can be
# placed in /docker-entrypoint-initdb.d/ to be loaded into mysql
# i.e.
# 000-accounting_schema.sql
# 001-accounts_schema.sql
# ...

USAGE="Usage: $0 username password host"

if [ "$#" -lt "3" ]; then
  echo $USAGE
  exit 1
fi

USERNAME=$1
PASSWORD=$2
HOST=$3


echo "Fetching available databases..."
DATABASES=$(mysql -u ${USERNAME} -p${PASSWORD} -h ${HOST} -e 'show databases;' | awk '{ print $1 }' | egrep -v '(Database|schema|mysql)')


echo "Creating database schema files with mysqldump for each database..."

i=0;
for DB in $DATABASES; do
    
    printf -v j "%03d" $i
    FILE=${DB}-schema.sql

    echo "Dumping the ${DB} schema into ${FILE}"
    
    echo -e "CREATE DATABASE IF NOT EXISTS ${DB};\n\nuse ${DB};\n" > ${FILE}
    mysqldump -u ${USERNAME} -p${PASSWORD} -h ${HOST} --no-data ${DB} >> ${FILE}

    let "i++";
done