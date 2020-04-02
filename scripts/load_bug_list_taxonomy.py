import os,csv, mysql.connector, logging
from mysql.connector import Error

logging.basicConfig(filename='info_test.log', level=logging.INFO)

## function to run customized query statement

def insertIntoSampleTaxonomy(sid, tid, abd):
        query = """INSERT INTO sample_taxonomy (sample_id, taxonomy_id, abundance)
                                                VALUES (get_sample_id(%s), get_taxonomy_id(%s), %s)"""
        values = (sid, tid, abd)
        cursor.execute(query, values)
        connection.commit()
        logging.info(str(sid)+" "+str(tid)+" is inserted")

try:
    connection = mysql.connector.connect(
        host="localhost",
        user="root",
        passwd="123",
        database="CMGD"
    )
    cursor = connection.cursor()
##    cursor.execute('CALL sample_taxonomy_load_data(1, "t__PRJNA15388", 99.87977)')
##    connection.commit()
##    logging.info("inserted")
except Exception as e:
    logging.error(e)

for filename in os.listdir("../metaphlan_bugs_list"):
    sample_name = filename.split(".")[0]
    f=open("../metaphlan_bugs_list"+"/"+filename)
    rows=csv.reader(f,delimiter="\t")
    header=next(rows)
    for r in rows:
        ls=r[0].split("|")
        taxonomy_name = ls[-1]
        abundance = r[1]
        try:
            insertIntoSampleTaxonomy(sample_name, taxonomy_name, abundance)
        except mysql.connector.Error as error:
            logging.error("Failed to insert into MySQL table {} {} {}".format(error, sample_name, taxonomy_name))
    f.close()

if (connection.is_connected()):
    cursor.close()
    connection.close()
    logging.info("connection is closed")