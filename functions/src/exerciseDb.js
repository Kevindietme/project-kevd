import { db } from "./dbConnect.js";
const coll = db.collection('exercise');

const toArray = (collection) => collection.docs.map(doc => ({ id:doc.id, ...doc.data() }));

export async function getExerciseList(req,res) {
    try {
        const allExercises = await coll.get();
        res.send(toArray(allExercises));
    } catch (err) {
        res.status(500).send(err);
    }
}

export async function addNewExercise(req,res) {
    try {
        const newExercise = req.body;
        await coll.add(newExercise);
        getExerciseList(req,res);
    } catch (err) {
        res.status(500).send(err);
    }
}

export async function updateExerciseById(req,res) {
    try {
        const { exerciseId } = req.params; 
        const updatedInfo = req.body;
        await coll.doc(exerciseId).update(updatedInfo);
        getExerciseList(req,res);
    } catch (err) {
        res.status(500).send(err);
    }
}