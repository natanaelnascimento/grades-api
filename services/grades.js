import gradesRepository from '../repositories/grades.js';

const create = async (grade) => {
    grade.lastModified = new Date();
    return await gradesRepository.create(grade);
}

const find = async (grade) => {
    return await gradesRepository.find(grade);
}

const findOne = async (grade) => {
    return await gradesRepository.findOne(grade);
}

const update = async (grade) => {
    grade.lastModified = new Date();
    return await gradesRepository.update(grade);
}

const remove = async (grade) => {
    return await gradesRepository.remove(grade);
}

const removeAll = async () => {
    return await gradesRepository.removeAll();
}

export default { create, find, findOne, update, remove, removeAll };