import gradeModel from '../models/grade.js';
import clone from '../helpers/clone.js';

const create = async (grade) => {
    const model = new gradeModel(grade);
    const created = await gradeModel.create(model);
    const createdClone = clone(created);
    createdClone.id = created._id;
    return createdClone;
}

const find = async (grade, limit) => {
    const gradeClone = clone(grade);
    if (gradeClone.id) {
        gradeClone._id = gradeClone.id;
        delete gradeClone.id;
    }
    if (gradeClone.name) gradeClone.name = { $regex: new RegExp(gradeClone.name), $options: 'i' };
    const found = limit ?
        await gradeModel.find(gradeClone).limit(limit)
        : await gradeModel.find(gradeClone);
    return found.map(g => {
        const gClone = clone(g);
        gClone.id = g._id;
        delete gClone._id;
        return gClone;
    });
}

const findOne = async (grade) => {
    const gradeClone = clone(grade);
    if (gradeClone.id) {
        gradeClone._id = gradeClone.id;
        delete gradeClone.id;
    }
    const found = await gradeModel.findOne(gradeClone);
    const foundClone = clone(found);
    foundClone.id = found._id;
    return foundClone;
}

const update = async (grade) => {
    const gradeClone = clone(grade);
    if (gradeClone.id) {
        gradeClone._id = gradeClone.id;
        delete gradeClone.id;
    }
    const model = new gradeModel(gradeClone);
    const updated = await gradeModel.findByIdAndUpdate(model._id, model, { new: true, useFindAndModify: false });
    updated.id = updated._id;
    delete updated._id;
    return updated;
}

const remove = async (grade) => {
    const gradeClone = clone(grade);
    if (gradeClone.id) {
        gradeClone._id = gradeClone.id;
        delete gradeClone.id;
    }
    await gradeModel.deleteOne(gradeClone);
}

const removeAll = async () => {
    await gradeModel.deleteMany({});
}

export default { create, find, findOne, update, remove, removeAll };