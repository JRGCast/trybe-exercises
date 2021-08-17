import csv

results = []
with open('jobs.csv', 'r') as file:
  reader = csv.DictReader(file)
  header, *data = reader
  line_count = 0
  for row in data:
    if row["industry"] != "":
      results.append(row["industry"])
    line_count += 1
  print(f"finished analyzing {line_count} rows")

# for element in results: 
#   print(element)
results.sort()
filtered = set(results)
filtered.add('ZLAST')
final = list(filtered)
final.sort()
print(final)
# for element in filtered: 
#   print((element))
