const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const namaDatabase = 'task-manager';
async function main() {
    try {
        await client.connect();
        console.log('Berhasil terhubung ke MongoDB database server');
        const db = client.db(namaDatabase);

        // Menghapus satu data tugas dengan deskripsi tertentu
        const deleteResult = await db.collection('tugas').deleteOne({
            Deskripsi: 'Membersihkan rumah'
        });
        console.log('Hasil deleteOne pada koleksi tugas:', deleteResult);

        // Menghapus banyak data pengguna dengan usia tertentu
        // db.collection('pengguna').deleteMany({ usia: 22 })
        //     .then((result) => { console.log(result); })
        //     .catch((error) => { console.error(error); });
    } catch (error) {
        console.error(error);
    }
}
main();