import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

/*
### tableX

| name       | type                     | format | required |
|------------|--------------------------|--------|----------|
| id         | integer                  | bigint | true     |
| created_at | string                   | timestamp with time zone | true |
| title      | string                   | text   | false    |
| content    | string                   | text   | false    |
| color      | string                   | text   | false    |

Note: 
- id is the Primary Key
- No foreign key relationships are defined for this table
*/

// Fetch all tableX items
export const useTableX = () => useQuery({
    queryKey: ['tableX'],
    queryFn: () => fromSupabase(supabase.from('tableX').select('*')),
});

// Fetch a single tableX item by id
export const useTableXItem = (id) => useQuery({
    queryKey: ['tableX', id],
    queryFn: () => fromSupabase(supabase.from('tableX').select('*').eq('id', id).single()),
    enabled: !!id,
});

// Add a new tableX item
export const useAddTableX = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newItem) => fromSupabase(supabase.from('tableX').insert([newItem])),
        onSuccess: () => {
            queryClient.invalidateQueries('tableX');
        },
    });
};

// Update a tableX item
export const useUpdateTableX = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('tableX').update(updateData).eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('tableX');
        },
    });
};

// Delete a tableX item
export const useDeleteTableX = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('tableX').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('tableX');
        },
    });
};