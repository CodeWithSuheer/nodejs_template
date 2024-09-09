import { CrudModel } from "../models/crudModal.js";

export const getAllData = async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 3;

        const totalRecords = await CrudModel.countDocuments();

        const data = await CrudModel.find()
            .skip((page - 1) * limit)
            .limit(limit);

        return res.status(200).json({
            status: true,
            message: "Records fetched successfully",
            data,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(totalRecords / limit),
                totalRecords,
            },
        });
    } catch (error) {
        res.status(500).json({ message: "Error while fetching records" });
    }
};

export const createData = async (req, res) => {
    try {
        const { name, email, desc } = req.body;

        if (!name || !email || !desc) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const data = await CrudModel.create({ name, email, desc });

        return res.status(201).json({
            status: true,
            message: "Record created successfully",
            data,
        });
    } catch (error) {
        res.status(500).json({ message: "Error while creating record" });
    }
};

export const updateData = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, desc } = req.body;

        const updatedData = await CrudModel.findByIdAndUpdate(
            id,
            { name, email, desc },
            { new: true }
        );

        if (!updatedData) {
            return res.status(404).json({ message: "Record not found" });
        }

        return res.status(200).json({
            status: true,
            message: "Record updated successfully",
            data: updatedData,
        });
    } catch (error) {
        res.status(500).json({ message: "Error while updating record" });
    }
};

export const deleteData = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedData = await CrudModel.findByIdAndDelete(id);

        if (!deletedData) {
            return res.status(404).json({ message: "Record not found" });
        }

        return res.status(200).json({
            status: true,
            message: "Record deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ message: "Error while deleting record" });
    }
};
