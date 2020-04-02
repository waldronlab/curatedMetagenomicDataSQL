import csv
f_out = open("taxonomy_ref.txt", "w")

d_name = {}
d_parent = {}

f = open("mpa_v30_CHOCOPhlAn_201901_taxonomy.txt")
rows = csv.reader(f, delimiter="\t")
for r in rows:
    l1 = r[0].split("|")
    l2 = r[1].split("|")
    i = len(l2) - 1
    j = i - 1
    while i > 0:
        d_name[int(l2[i])] = l1[i] +","+ str(i + 1)
        while l2[j] == "":
            j -= 1
        d_parent[int(l2[i])] = l2[j]
        i = j
        j -= 1
    d_name[int(l2[i])] = l1[0] + ",1"
    d_parent[int(l2[i])] = '0'


for i in sorted(d_name.keys()):
    print>>f_out, str(i) + "," + d_name[i] + "," + d_parent[i]