﻿var WorkflowDesignerConstants = {
    SelectColor: 'yellow',
    ActivityColor: '#F2F2F2',
    ActivityInitialColor: '#CCCC99',
    ActivityFinalColor: '#CC9966',
    ActivityCurrentColor: '#00CCCC',

    DeleteConfirm: 'Are you sure you want to delete selected item(s)?',
    FieldIsRequired: 'Field is required!',
    FieldMustBeUnique: 'Field must be unique!',
    ButtonTextDelete: 'Delete',
    ButtonTextCreate: 'Create',

    InfoBlockLabel:{
        Activity: 'Activity: ',
        Transition: 'Transition: ',
        Command: 'Command: ',
    },

    ActivityNamePrefix: 'Activity_',
    ActivityFormLabel: {
        Title: 'Activity',
        Name: 'Name',
        State: 'State',
        IsInitial: 'Initial',
        IsFinal: 'Final',
        IsForSetState: 'For set state',
        IsAutoSchemeUpdate: 'Auto scheme update',
        Implementation: 'Implementation',
        PreExecutionImplementation: 'PreExecution Implementation',
        ImpOrder: 'Order',
        ImpAction: 'Action',
        ImpActionParameter: 'Action parameter',
        AlwaysConditionShouldBeSingle: 'Always condition should be single',
        OtherwiseConditionShouldBeSingle: 'Otherwise condition should be single'
        
    },

    TransitionFormLabel: {
        Title: 'Transition',
        Name: 'Name',
        From: 'From activity',
        To: 'To activity',
        Classifier: 'Classifier',
        Restrictions: 'Restrictions',
        RestrictionsType: 'Type',
        RestrictionsActor: 'Actor',
        Condition: 'Condition',
        ConditionType: 'Type',
        ConditionAction: 'Action',
        ResultOnPreExecution: 'Result on PreExecution',
        Trigger: 'Trigger',
        TriggerType: 'Type',
        TriggerCommand: 'Command',
        TriggerTimer: 'Timer',
        ConditionActionParameter: 'Action parameter',
        ConditionInversion: 'Invert action result',
        ConditionsConcatenationType: 'Conditions concatenation type',
        AllowConcatenationType: 'Concat allow as',
        RestrictConcatenationType: 'Concat restrict as',
        ConditionsListShouldNotBeEmpty: 'Conditions list should not be empty'

    },
    LocalizationFormLabel: {
        Title: 'Localization',
        ObjectName: 'ObjectName',
        Type: 'Type',
        IsDefault: 'IsDefault',
        Culture: 'Culture',
        Value: 'Value',
        Types: ['Command', 'State', 'Parameter'],
    },

    TimerFormLabel: {
        Title: 'Timers',
        Name: 'Name',
        Type: 'Type',
        Value: 'Value',
        Types: ['Command', 'State', 'Parameter'],
        NotOverrideIfExists : "Do not override timer if exists"
    },

    ParameterFormLabel: {
        Title: 'Parameters',
        Name: 'Name',
        Type: 'Type',
        Purpose: 'Purpose',
        Value: 'Value',
        DefaultValue: 'DefaultValue'
    },

    ActorFormLabel: {
        Title: 'Actors',
        Name: 'Name',
        Rule: 'Rule',
        Value: 'Value'
    },

    CommandFormLabel: {
        Title: 'Command',
        Name: "Name",
        InputParameters: "Input Parameters",
        InputParametersName: 'Name',
        InputParametersParameter: 'Parameter'
    },

    AdditionalParamsFormLabel: {
        Title: 'Additional Parameters',
        IsObsolete: "IsObsolete",
        DefiningParameters: 'Defining parameters',
        ProcessParameters: 'Process parameters',
        ProcessParametersName: 'Name',
        ProcessParametersValue: 'Value'
    },
     CodeActionsFormLabel: {
        Title: 'Code actions',
        Name: 'Name',
        ActionCode: 'Action code',
        IsGlobal: 'Is global',
        Type: 'Type'
    },

    ToolbarLabel: {
        CreateActivity: 'Create activity',
        CopySelected: 'Copy selected',
        Undo: 'Undo',
        Redo: 'Redo',
        Move: 'Move',
        ZoomIn: 'Zoom In',
        ZoomOut: 'Zoom Out',
        ZoomPositionDefault: 'Zoom and position default set',
        AutoArrangement: 'Auto arrangement',
        Actors: 'Actors',
        Commands: 'Commands',
        Parameters: 'Parameters',
        Localization: 'Localization',
        Timers: 'Timers',
        AdditionalParameters: 'Additional Parameters',
        CodeActions: 'Code actions'
    },
    ErrorActivityIsInitialCountText: "One element must be marked flag Initial",
    ErrorReadOnlySaveText: "The Designer in ReadOnly mode, you can't save it.",
    FormMaxHeight: 500,
    EditCodeLabel : {
        EditCodeButton: 'Edit code',
        Usings : 'Usings'
    }
};