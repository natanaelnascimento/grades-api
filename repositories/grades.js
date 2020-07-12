import gradeModel from '../models/grade.js';
import clone from '../helpers/clone.js';

const create = async (grade) => {
    const model = new gradeModel(grade);
    const created = await gradeModel.insert(model);
    created.id = created._id;
    return created;
}

const find = async (grade, limit) => {
    const gradeClone = clone(grade);
    if (gradeClone.id) gradeClone._id = gradeClone.id;
    //condicao para o filtro no findAll
    if (gradeClone.name) gradeClone.name = { $regex: new RegExp(gradeClone.name), $options: 'i' };
    const found = limit ?
        await gradeModel.find(gradeClone).limit(limit)
        : await gradeModel.find(gradeClone);
    return found.map(g => {
        g.id = g._id;
        return g;
    });
}

const findOne = async (grade) => {
    const gradeClone = clone(grade);
    if (gradeClone.id) gradeClone._id = gradeClone.id;
    const found = await gradeModel.findOne(gradeClone);
    found.id = found._id;
    return found;
}

const update = async (grade) => {
    const model = new gradeModel(grade);
    if (model.id) model._id = model.id;
    const updated = gradeModel.findByIdAndUpdate(model._id, model, { new: true, useFindAndModify: false });
    updated.id = updated._id;
}

const remove = async (grade) => {
    const gradeClone = clone(grade);
    if (gradeClone.id) gradeClone._id = gradeClone.id;
    await gradeModel.findByIdAndDelete(gradeClone._id);
}

const removeAll = async () => {
    await gradeModel.deleteMany({});
}

export default { create, find, findOne, update, remove, removeAll };