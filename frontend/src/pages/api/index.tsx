export default function Api(req: any, res: any) {
    res.status(400).json({ message: 'You don\'t have permission' })
}