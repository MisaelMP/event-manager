EmployeeManager.Collections.Employees = Backbone.Collection.extend({
    model: EmployeeManager.Models.Employee,
    localStorage: new Store('Employee-manager')
});
